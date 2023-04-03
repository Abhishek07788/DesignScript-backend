# DesignScript-backend
### Backend Cyclick Deploy Link: https://magnificent-pink-horse.cyclic.app

### Routes
user:
/user => get, post, patch, delete
/user/signup  => get
/user/login  => get

blogs:
/blogs => get, post, patch, delete
/blogs/title/${title}  => get
/blogs/user/${id}  => get

comments:
/comments => get, post, patch, delete
/comments/blog/${id}  => get
/comments/user/${id}  => get
/comments/${id}  => get
