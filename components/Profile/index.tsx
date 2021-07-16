import clsx from "clsx";
import Link from "next/link";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import styles from "./Profile.module.scss";

interface ProfileProps {
  fullName: string;
  username: string;
  avatarUrl: string;
  about: string;
}

export const Profile: React.FC<ProfileProps> = ({
  fullName,
  username,
  avatarUrl,
  about,
}) => {
  return (
    <>
      <Link href="/rooms">
        <a className="d-flex mb-30 ">
          <img src="/static/back-arrow.svg" alt="Back" className="mr-10" />
          <h3>Back</h3>
        </a>
      </Link>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Avatar width="100px" height="100px" src={avatarUrl} />
          <div className="d-flex flex-column ml-30 mr-30">
            <h2 className="mt-0 mb-0">{fullName}</h2>
            <h3 className={clsx("mt-0 mb-0", styles.username)}>@{username}</h3>
          </div>
        </div>
        <Button className={styles.followButton} color="blue">
          Follow
        </Button>
      </div>
      <p className={styles.about}>{about}</p>
    </>
  );
};
