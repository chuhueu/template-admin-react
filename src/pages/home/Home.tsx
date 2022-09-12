import { Button, Paper, Box } from "@mui/material";
import { FuseCard } from "components";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "store";
import { RootState } from "store/reducers";

const Home = () => {
  const mode = useSelector((state: RootState) => state.Web.mode);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <FuseCard header={'aaaa'} content={'bbb'}/>
  );
};

export default Home;
