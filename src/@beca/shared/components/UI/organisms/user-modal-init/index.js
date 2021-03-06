import ModalUser1 from './modal-1'
import ModalUser2 from './modal-2'
import ModalUser3 from './modal-3'
import ModalUser4 from './modal-4'
import ModalUser5 from './modal-5'
import useAction from './use-action'

export default function ModalInitiUser({ user }) {
  const valDocument = user.document_id && true
  const valContact = user.contact_phone && true
  const [{ active, close }, actions] = useAction(user, valDocument, valContact)

  const imageNew = actions.watch('image')
  return (
    <div>
      {(!valDocument || !valContact) && !close && (
        <>
          <ModalUser1
            open={active === 1}
            onMove={actions.onMove}
            onExit={(exit) => actions.setState({ close: exit })}
          />
          <ModalUser2
            open={active === 2}
            onMove={actions.onMove}
            onChange={actions.register}
            document={user.document_id}
            name={user.name}
            lastName={user.last_name}
            onExit={(exit) => actions.setState({ close: exit })}
          />
          <ModalUser3
            open={active === 3}
            onMove={actions.onMove}
            phone={user.contact_phone}
            onChange={actions.register}
            onExit={(exit) => actions.setState({ close: exit })}
          />
          <ModalUser4
            open={active === 4}
            photo={imageNew || user.image_url}
            onMove={actions.onMove}
            onChange={actions.setValue}
            onExit={(exit) => actions.setState({ close: exit })}
          />
          <ModalUser5
            open={active === 5}
            action={() => actions.setState((it) => ({ ...it, active: 6 }))}
            onExit={(exit) => actions.setState({ close: exit })}
          />
        </>
      )}
    </div>
  )
}
