import './ChatPage.css';

import type { UserTypo } from "../utils/types.ts";

function ChatPage({user}: {user: UserTypo}) {

  return (
    <div className="chatPageContainer">
      <div className="chatContainer">
        <div className="chatToolBar"></div>
        <div className="chatContactContainer"></div>
        <div className="chatContainer"></div>
      </div>
    </div>
  );
}

export default ChatPage;