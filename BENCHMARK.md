# Benchmark Results

## Code Splitting

- **Initial `main.js` Bundle Size:** 1.5MB
- **`main.js` Bundle Size After Code Splitting:** 228KB
- **Shared Module Size:** 1.1MB

### Conclusion

Code splitting has significantly reduced the initial bundle size of the application, resulting in a faster initial load time. The majority of the application's code is now loaded on demand, as the user navigates to different views.
