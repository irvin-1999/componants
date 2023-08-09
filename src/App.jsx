import CommentDetail from "./components/comments";
import ApprovalCard from "./components/approvalCard";

function App() {
  return (
    <>
      <div className="ui comments">
        <ApprovalCard>
          <CommentDetail
            author="Rorisang"
            timeAgo="just now"
            content="I am loving this"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Boitumelo"
            timeAgo="2 days ago"
            content="Lovely picture"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Sesi"
            timeAgo="5 minutes ago"
            content="Great Content"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Kgotli"
            timeAgo="15 hrs ago"
            content="Beatiful anime"
          />
        </ApprovalCard>
      </div>
    </>
  );
}

export default App;
