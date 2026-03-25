// generate user
export function generateUser() {
    const timestamp = Date.now();
    return {
        email: `ngandt_${timestamp}@example.com`,
        username: `ngandt_username_${timestamp}`,
        firstname: `ngandt_firstname_${timestamp}`,
        lastname: `ngandt_lastname_${timestamp}`,
        password: `Password_${timestamp}`,
        role: 'subscriber'
    };
}