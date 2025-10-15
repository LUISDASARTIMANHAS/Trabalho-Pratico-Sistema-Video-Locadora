const ListPage = ({ moduleConfig, reloadData }) => {
  const [tableData, setTableData] = useState(moduleConfig.data);

  useEffect(() => {
    setTableData(moduleConfig.data);
  }, [moduleConfig.data]);

  const handleReload = async () => {
    const freshData = await reloadData();
    setTableData(freshData);
  };

  return (
    <div>
      <h1>Lista de {moduleConfig.label}</h1>
      <button onClick={handleReload}>Recarregar</button>
      <Link
        to={`/${moduleConfig.name}/novo`}
        style={{ display: "inline-block", marginBottom: "20px" }}
      >
        + Inserir novos {moduleConfig.label}
      </Link>

      <DynamicTable data={tableData} />
    </div>
  );
};
