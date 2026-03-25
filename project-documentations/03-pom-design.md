## POM Design
### Purpose
- Help improving test maintainability, readability, and stability.

### Structure
- Each page includes:
    - locators
    - actions
    - optional assertion  (this is an optional for verifying API status code)

### Example
```
pages/ #POM
|__Authentication
|______login.page.ts
|______logout.page.ts
|__Dashboard
|______home.page.ts
|______update.page.ts
|__User
|______allUser.page.ts
|______userManagement.page.ts
|_....

tests/
|__Authentication
|______login.spec.ts
|______logout.spec.ts
|__Dashboard
|______home.spec.ts
|______update.spec.ts
|__User
|______allPost.spec.ts
|______userManagement.spec.ts
|_....

```

### Note/ Recommendation
- Do not include logic test inside POM
- Keep focusing on UI handling.
- Avoid hardcoded test data.
- Prefer returning locators instead of asserting directly(except API testing).
- Business logic validation (should be in tests).
