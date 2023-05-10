import '@styles/globals.css';

export const metadata = {
  title: 'Share',
  description: 'Share AI Search',
};

const RootLayout = ({ children }: any) => {
  return (
    <html lang='eng'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
