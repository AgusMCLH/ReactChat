

import type { UserTypo } from "../utils/types.ts";

function AdminPage({user}: {user: UserTypo}) {

  return (
    <div>
      <h1>Admin Page</h1>
        <p>Welcome, {user?.role} {user?.name}!</p>
      <p>This page is only accessible to users with admin privileges.</p>
    </div>
  );
}

export default AdminPage;