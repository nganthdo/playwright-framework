## Website Feature
### Purpose
- This website allows users to manage content, media, and system settings.

### Main user roles
    1- Admin
    2- Editor
    3- Author
    4- Contributor
    5- Subscriber

### Core features
```
- Authentication
    - Login
    - Logout
- Dashboard
- User Management
    - CRUD User
- Post/ Comment
    - CRUD Post
    - CRUD Comment
    - CRUD Categories & Tags
- Media/ Page
    - CRUD Media File
    - CRUD Page
- System Setting
    - Appearance
    - Plugins
    - Tools
    - Setting

```
 
## Risk Areas/ Testing Note
- Dashboard Page 
    - Widgets in dashboard is dynamic => flaky test if changing data

- RBAC 
    - Different roles can see different views
    - Unauthorized access token

- UI is dynamic
    - Theme is changed when testing -> unstable locators

-   Languages is changed in Profile Setting -> text-based locator failure
