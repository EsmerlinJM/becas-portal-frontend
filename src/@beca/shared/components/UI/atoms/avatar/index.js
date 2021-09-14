export default function Avatar({ img, name }) {
  return (
    <>
      <img
        className="inline object-cover w-10 h-10 mr-2 rounded-full"
        src={
          img ||
          'https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png'
        }
        // src="https://media-exp1.licdn.com/dms/image/C5603AQFGVNDGIe-ZVA/profile-displayphoto-shrink_200_200/0/1624405199873?e=1634169600&v=beta&t=8JZ4rhTsOljyUGiD_W3VDEdOAAYhDJtrb5w4BthcxZQ"
        alt=""
      />
      <span className="mr-1">{name}</span>
    </>
  )
}
