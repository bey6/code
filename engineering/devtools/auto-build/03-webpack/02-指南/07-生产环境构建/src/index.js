console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  console.log('开发环境');
} else if (process.env.NODE_ENV === 'production') {
  console.log('生产环境');
}
