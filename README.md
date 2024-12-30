# My Portfolio

Welcome to my personal portfolio project. This project showcases my work and achievements as a Software Engineer, built with modern web technologies.

## Overview

-   **Framework**: Next.js
-   **Routing**: App Router
-   **Internationalization**: Supports both Portuguese and English
-   **Blog**: Integrated blog feature
-   **Database**: Firestore for data storage
-   **Email Subscription**: Users can subscribe to receive updates via email
-   **Deployment**:
    -   Main branch deployed on Vercel: [Live on Vercel](https://cs220-portfolio-hecris10.vercel.app/)
    -   Static version deployed on GitHub Pages: [Live on GitHub Pages](https://hecris10.github.io/portifolio)

## Features

-   **Next.js with App Router**: Utilizes the powerful features of Next.js for a seamless and efficient web experience.
-   **Internationalization (i18n)**: The portfolio supports both Portuguese and English, catering to a wider audience.
-   **Blog Integration**: A dedicated blog section to share articles and updates.
-   **Firestore Database**: All data, including blog posts and user subscriptions, are stored in Firestore.
-   **Email Subscription**: Visitors can subscribe to receive email notifications about new blog posts and updates.
-   **Two Deployment Versions**: The main branch is deployed on Vercel for dynamic content, while a static version is available on GitHub Pages.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/hecris10/portifolio.git
    cd portifolio
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Firestore and email subscription service credentials.

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Vercel

The main branch is automatically deployed on Vercel. Any push to the main branch triggers a new deployment.

### GitHub Pages

The static version is deployed on GitHub Pages. To deploy the static version, run the following command:

```bash
npm run export
```

## Contact

For any questions or inquiries, please contact me at ewerton.webdev@gmail.com.
