/*
  # Fix RLS Performance and Remove Unused Indexes

  ## Security Improvements
  
  Optimizes Row Level Security (RLS) policies by wrapping auth functions with SELECT statements.
  This prevents re-evaluation of auth.uid() for each row, improving query performance at scale.
  
  ## Changes
  
  1. Drop and recreate all RLS policies with optimized auth.uid() calls using (select auth.uid())
  2. Remove unused indexes that haven't been used by the query planner
  3. Keep the policies functionally identical but more performant
*/

-- Drop existing policies for profiles
DROP POLICY IF EXISTS "Users can create their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;

-- Recreate profiles policies with optimized auth calls
CREATE POLICY "Users can create their own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (id = (select auth.uid()));

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (id = (select auth.uid()))
  WITH CHECK (id = (select auth.uid()));

-- Drop existing policies for posts
DROP POLICY IF EXISTS "Authenticated users can create posts" ON posts;
DROP POLICY IF EXISTS "Users can update their own posts" ON posts;
DROP POLICY IF EXISTS "Users can delete their own posts or admins can delete any" ON posts;

-- Recreate posts policies with optimized auth calls
CREATE POLICY "Authenticated users can create posts"
  ON posts FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can update their own posts"
  ON posts FOR UPDATE
  TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can delete their own posts or admins can delete any"
  ON posts FOR DELETE
  TO authenticated
  USING (
    user_id = (select auth.uid()) OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

-- Drop existing policies for replies
DROP POLICY IF EXISTS "Authenticated users can create replies" ON replies;
DROP POLICY IF EXISTS "Users can update their own replies" ON replies;
DROP POLICY IF EXISTS "Users can delete their own replies or admins can delete any" ON replies;

-- Recreate replies policies with optimized auth calls
CREATE POLICY "Authenticated users can create replies"
  ON replies FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can update their own replies"
  ON replies FOR UPDATE
  TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can delete their own replies or admins can delete any"
  ON replies FOR DELETE
  TO authenticated
  USING (
    user_id = (select auth.uid()) OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

-- Drop unused indexes
DROP INDEX IF EXISTS posts_user_id_idx;
DROP INDEX IF EXISTS posts_subject_idx;
DROP INDEX IF EXISTS posts_post_type_idx;
DROP INDEX IF EXISTS replies_user_id_idx;