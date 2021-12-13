module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '87cae0363913bfab86023c5d71dc05c8'),
  },
});
