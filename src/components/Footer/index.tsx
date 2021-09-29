import Logo from '../../assets/webpay_logo_white.svg';

const navigation = {
  solutions: [
    { name: 'Docs', href: 'https://docs.webpay.so' },
    { name: 'Github', href: 'https://github.com/webpay-labs' },
  ],
  support: [{ name: 'Register', href: 'https://app.webpay.so' }],
  company: [
    { name: 'Discord', href: 'https://discord.gg/5Jftfevd' },
    { name: 'Twitter', href: '' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <a href="/">
                <span className="sr-only">Webpay</span>
                <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
              </a>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div></div>
              <div>
                <h3 className="text-base font-semibold text-white tracking-wider ">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-white hover:text-purple"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="md:mt-0 mb-8 md:mb-0">
                <h3 className="text-base font-semibold text-white tracking-wider">
                  Merchants
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-white hover:text-purple"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white tracking-wider">
                  Connect
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-white hover:text-purple"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
