const Header = () => {

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/c4d58183-ee58-4bb9-b2f7-00e2f3bd9ceb.png" alt="Scrib Logo" className="h-8 w-auto" />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;