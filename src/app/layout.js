// _app.js or in your page file (where you want to use both RootLayout and ClientComponent)
import RootLayout from './Rootlayout';
import ClientComponent from './ClientComponent';

export default function MyApp({ children }) {
  return (
    <RootLayout>
      <ClientComponent>
        {children}
      </ClientComponent>
    </RootLayout>
  );
}
