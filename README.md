# ShopHub - E-Commerce Application

A modern, functional small ecommerce platform built with **Next.js 16**, **React 19**, and **TypeScript**. ShopHub demonstrates best practices in React state management, server-side rendering, and responsive design.

## ?? Features

- **Product Browsing**: Display products from DummyJSON API with real-time pricing and discount calculations
- **Shopping Cart**: Add/remove items with persistent cart state using React Context API
- **Category Filtering**: Browse products by category (Beauty, Fragrances)
- **Product Details**: Detailed product pages with comprehensive information
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Server-Side Rendering**: Optimized performance with Next.js App Router
- **Type-Safe**: Full TypeScript support for better development experience

## ??? Tech Stack

| Technology       | Version | Purpose                         |
| ---------------- | ------- | ------------------------------- |
| **Next.js**      | 16.1.6  | React framework with App Router |
| **React**        | 19.2.3  | UI library                      |
| **TypeScript**   | 5       | Type safety                     |
| **Tailwind CSS** | 4       | Utility-first CSS framework     |
| **Lucide React** | 0.563.0 | Icon library                    |
| **React DOM**    | 19.2.3  | DOM rendering                   |

## ?? Project Structure

```
+-- app/
�   +-- layout.tsx              # Root layout with CartProvider
�   +-- page.tsx                # Home page - All products grid
�   +-- globals.css             # Global styles
�   +-- components/
�   �   +-- Header.tsx          # Navigation with cart badge
�   �   +-- ProductCard.tsx     # Reusable product card component
�   �   +-- AddToCartButton.tsx # Add to cart action
�   +-- context/
�   �   +-- CartContext.tsx     # Global cart state management
�   +-- cart/
�   �   +-- page.tsx            # Shopping cart page
�   +-- category/
�   �   +-- [slug]/page.tsx     # Category-based product filtering
�   +-- product/
�       +-- [id]/page.tsx       # Individual product detail page
+-- public/                      # Static assets
+-- package.json                # Project dependencies
```

## ?? Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**
   `ash
git clone <repository-url>
cd small-ecommerce-nextjs
`

2. **Install dependencies**
   `ash
   npm install

   # or

   yarn install

   # or

   pnpm install
   `

3. **Run the development server**
   `ash
   npm run dev

   # or

   yarn dev

   # or

   pnpm dev
   `

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## ?? Available Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Build production-optimized application   |
| `npm start`     | Start production server                  |
| `npm run lint`  | Run ESLint code quality checks           |

## ?? Key Features Explained

### Cart Management

The cart system uses React Context API for global state management. Products can be added with automatic quantity increment for duplicate items. Real-time price calculation and item count display in the header.

### Product Data

Products are fetched from the **DummyJSON API**, providing realistic ecommerce data including:

- Product images and titles
- Pricing with discount calculations
- Category information
- Detailed product descriptions

### Responsive Design

Built with Tailwind CSS grid system:

- **Mobile**: 1 column layout
- **Tablet**: 2-3 columns
- **Desktop**: 3-4 columns with optimized spacing

## ?? Development Notes

- **SSR Optimization**: Home page uses Next.js caching for improved performance
- **Image Optimization**: Next.js Image component with responsive sizes
- **Font Loading**: Inter font optimized via Google Fonts
- **Code Organization**: Component-based architecture for maintainability

## ?? Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import the repository to Vercel
3. Vercel automatically detects Next.js and configures the build
4. Your app is deployed!

### Deploy to Other Providers

```bash
npm run build
npm start
```

The `build` command creates an optimized production build in the `.next` folder.

## ?? License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ?? Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest features
- Submit pull requests

## ?? Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [DummyJSON API](https://dummyjson.com)

---

**Built with ?? using Next.js and React**
