import Post from "../components/Post/Post";

// display initial content when the web app is first opened
// TODO: replace mock content with real data

function Browse() {
  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Browse;
