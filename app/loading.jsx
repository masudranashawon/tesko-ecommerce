const Loading = () => {
  return (
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-white">
      <div className="border-primary h-12 w-12 animate-spin rounded-full border-b-2"></div>
    </div>
  );
};

export default Loading;
