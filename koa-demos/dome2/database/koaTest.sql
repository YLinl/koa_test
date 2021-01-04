CREATE VIEW Friends
AS
SELECT
blog_user_friends.user_id AS user_id,
blog_users.user_name AS user_name,
blog_user_friends.user_friends_id AS user_friends_id,
blog_user_friends.user_note AS user_note
FROM
(
blog_users`blog_user_friends``blog_sorts`
JOIN blog_user_friends
)
WHERE
(
blog_users.user_id = blog_user_friends.user_id

