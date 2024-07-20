# Alive Docs: A Real-Time Collaborative Document Editor

Live Docs is an improved version of Google Docs, designed to manage millions of collaborators in real time with secure authentication, full markdown editor, document management, and various collaborative features. This project utilizes modern web technologies to create a responsive, efficient, and interactive application.

## Features

- **Real-Time Collaboration**: Manage multiple collaborators with live cursors, instant notifications, and nested comments.
- **Secure Authentication**: Hassle-free authentication using Clerk, with options like facial recognition and AI authentication.
- **Comprehensive Document Management**: Create, edit, save, and delete documents with flexible sharing options.
- **Responsive Design**: Fully responsive UI built with TailwindCSS, ensuring seamless use across all devices.
- **Advanced Editor**: Full markdown editor with support for tagging, emojis, and rich text formatting.
- **Monitoring and Performance**: Integrated Sentry for performance monitoring and error tracking.

## Tech Stack

- **Front-end**: Next.js, React, TailwindCSS, TypeScript
- **Editor**: Lexical by Meta, enhanced with Live Blocks for real-time collaboration
- **Authentication**: Clerk for user management and authentication
- **Storage**: Amazon S3 for file uploads
- **Monitoring**: Sentry for application monitoring

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Clerk account for authentication
- AWS account for S3 storage

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zacharias1219/alive_docs.git
   cd alive_docs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your environment variables. Example:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_API_KEY=your_clerk_api_key
   NEXT_PUBLIC_S3_BUCKET_NAME=your_s3_bucket_name
   NEXT_PUBLIC_S3_REGION=your_s3_region
   SENTRY_DSN=your_sentry_dsn
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment

To deploy this project, follow these steps:

1. Set up your production environment variables in your hosting service.
2. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```
3. Start the server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Usage

1. **User Registration**: Users can register and log in using Clerk, with options for Google, facial recognition, and more.
2. **Document Creation**: Users can create new documents, which are automatically shared with other collaborators.
3. **Real-Time Collaboration**: Users can edit documents in real time, with live cursors showing each collaborator's position.
4. **Comments and Notifications**: Users can add nested comments with tagging and emojis, and receive instant notifications for updates.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Special thanks to the open-source community for the tools and resources used in this project.
- Inspired by the comprehensive tutorial on building a real-time collaborative document editor.

---

For more information, refer to the [video tutorial](https://www.youtube.com/watch?v=y5vE8y_f_OM) that guided the development of this project.
