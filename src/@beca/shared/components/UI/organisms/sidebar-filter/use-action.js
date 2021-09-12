import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import qs from 'querystring'
import {
  searchByOffer,
  getAllOffer,
  getAllOfferByAll,
} from '../../../../../redux/slices/ofert/_actions'
import { removeAccents } from '../../../../utils/remove-accents'

const valPais = [
  "Republica Dominicana",
  "Dominican Republic",
  "dominican republic",
  "República Dominicana",
  "república dominicana",
  "republica dominicana",
];

export default function useAction(qp, search) {
  const history = useHistory()

  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.offers.all);
  const onSelect = (type, { name, id }) => {
    name = removeAccents(name)
    const qr = qp[type]
    const arrQr = qr ? qr.split('_') : []
    const filterA = arrQr.filter((r) => !r.includes(name))

    const valArea =
      type === "province" ||
      type === "area" ||
      type === "institution" ||
      type === "country";

    const newQuery = {
      ...qp,
      [type]: !valArea
        ? id
          ? [...arrQr, name].join('_')
          : filterA.join('_')
        : name,
    }

    if (type === "country" && +id !== 62) delete newQuery["province"];

    history.push({
      pathname: '/query-result',
      search: qs.stringify(newQuery).replace('%3F', ''),
    })
  }

  useEffect(() => {
    let params = qs.parse(search)
    params = JSON.stringify(params).replace('?', '')
    params = JSON.parse(params)

    const fn = async (id) => {
      dispatch(await getAllOffer(id))
    }

    params.id && !params.all && fn(params.id)
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let params = qs.parse(search)
    params = JSON.stringify(params).replace('?', '')
    params = JSON.parse(params)

    const fn = async (id) => {
      dispatch(await getAllOfferByAll(id))
    }
    params.all && !params.id && fn(params.search ? params.search : params.all)
    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      if (Object.keys(qp).length <= 1) return true
      let val = false
      const { oferta, institucion } = item

      for (const name in qp) {
        if (name === 'level') {
          const arr = qp[name].split('_')
          if (arr.length && arr[0].length) {
            const item = arr.find((qr) =>
              removeAccents(oferta.education_level_name).includes(qr),
            )

            if (item) val = true
            else return false
          } else {
            val = true
          }
        }

        if (name === 'area') {
          const qr = qp[name]
          if (qr && qr.length) {
            const item = removeAccents(oferta.development_area_name).includes(
              qr,
            )
            if (item) val = true
            else return false
          } else {
            val = true
          }
        }

        if (name === 'institution') {
          const qr = qp[name]
          if (qr && qr.length) {
            const item = removeAccents(institucion.name).includes(qr)
            if (item) val = true
            else return false
          } else {
            val = true
          }
        }

        if (name === 'language') {
          const arr = qp[name].split('_')
          if (arr.length && arr[0].length) {
            const item = arr.find((qr) =>
              removeAccents(oferta.language).includes(qr),
            )

            if (item) val = true
            else return false
          } else {
            val = true
          }
        }

        if (name === "country" && valPais.includes(qp[name])) {
          const qr = qp[name];
          if (qr && qr.length) {
            const item = removeAccents(oferta["campus_country"]).includes(qr);
            if (item) val = true;
            else return false;
          } else {
            val = true;
          }
        }

        if (name === "province") {
          const qr = qp[name];
          if (qr && qr.length) {
            const item = removeAccents(oferta.campus_province).includes(qr)
            if (item) val = true
            else return false
          } else {
            val = true
          }
        }

        if (name === 'modality') {
          const arr = qp[name].split('_')
          if (arr.length && arr[0].length) {
            const item = arr.find((qr) =>
              removeAccents(oferta.schedule.modality).includes(qr),
            )

            if (item) val = true
            else return false
          } else {
            val = true
          }
        }

        if (name === 'search') {
          const qr = qp[name]
          if (qr && qr.length) {
            const item = removeAccents(
              oferta.academic_offer_name.toLowerCase().trim(),
            ).includes(qr.toLowerCase().trim())
            if (item) val = true
            else return false
          } else {
            val = true
          }
        }
      }

      return val
    })

    dispatch(searchByOffer(filtered))
  }, [search, status, data, qp, dispatch])

  return { onSelect }
}
