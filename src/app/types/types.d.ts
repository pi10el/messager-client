enum UserRole {
  admin,
  user,
  editor,
}

interface AvatarProfile {
  src: string;
  blur: string;
}

interface UserProfile {
  id: number;
  email: string;
  username: string;
  about: string | null;
  avatar: AvatarProfile | null;
  role: UserRole;
}
