# Backend Folder
All Backend code goes here (Node.js / Python / Database / APIs)

## Dashboard & Management APIs (V1)

### Dashboard Analytics
- **GET /api/v1/dashboard/admin**: Platform-wide metrics (Interns, Instructors, Health Snapshot, Activity).
- **GET /api/v1/dashboard/instructor**: Personal metrics for instructors.

### User Management
- **GET /api/v1/management/instructors**: Comprehensive list of instructors with performance metrics.
- **GET /api/v1/management/interns**: Searchable list of students with progress tracking.
    - Query params: `instructorId`, `discipline` ("frontend", "backend", etc.), `status`.
