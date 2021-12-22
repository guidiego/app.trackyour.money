import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html>
        <Head />
        <body>
          <div className="w-scree h-screen bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
