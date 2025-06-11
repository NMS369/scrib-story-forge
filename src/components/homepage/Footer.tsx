const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="./lovable-uploads/c4d58183-ee58-4bb9-b2f7-00e2f3bd9ceb.png" 
              alt="Scrib Logo" 
              className="h-6 w-auto" 
              onError={(e) => {
                console.warn('Footer logo failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-muted-foreground">© 2025 Scrib. All rights reserved.</span>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;