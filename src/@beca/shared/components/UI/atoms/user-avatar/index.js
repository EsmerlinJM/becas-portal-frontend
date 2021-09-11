export default function UserAvatar({ user = { name: "" } }) {
  return (
    <div className="outline-none text-sm py-2 px-2 rounded inline-flex items-center">
      <img
        className="inline object-cover w-10 h-10 mr-2 rounded-full"
        src={
          user.image_url ||
          "https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png"
        }
        // src="https://media-exp1.licdn.com/dms/image/C5603AQFGVNDGIe-ZVA/profile-displayphoto-shrink_200_200/0/1624405199873?e=1634169600&v=beta&t=8JZ4rhTsOljyUGiD_W3VDEdOAAYhDJtrb5w4BthcxZQ"
        alt=""
      />
      <span className="mr-1">{user.name}</span>
      <svg
        className="fill-current mt-1 h-2 w-4"
        width={13}
        height={10}
        viewBox="0 0 13 10"
      >
        <path
          id="Polygon_5"
          data-name="Polygon 5"
          d="M5.662,1.29a1,1,0,0,1,1.677,0L12,8.455A1,1,0,0,1,11.157,10H1.843A1,1,0,0,1,1,8.455Z"
          transform="translate(13 10) rotate(180)"
          fill="#00a2ff"
        />
      </svg>
    </div>
  );
}
