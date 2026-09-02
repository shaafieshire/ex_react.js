import Header from "./header";
import Footer from "./footer";
import Post from "./post";

const Blog = () => {
  return (
    <div className="blog">
      <Header/>
      <main>
        <Post />
      </main>
      <Footer/>
    </div>
  );
};

export default Blog;