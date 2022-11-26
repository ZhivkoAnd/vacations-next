function MyApp({ Component, pageProps }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: { opacity: 0 },
        pageAnimate: { opacity: 1 },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
