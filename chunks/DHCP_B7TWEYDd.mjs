const id = "m8/DHCP.md";
						const collection = "docs";
						const slug = "m8/dhcp";
						const body = "\n\n## Paso 1: Actualizar el sistema\nPrimero, asegúrate de que tu sistema esté actualizado.\n```sh title=\"Instalando dependencias…\"\nsudo apt update && sudo apt upgrade -y\n```\n\n## Paso 2: Instalar servidor DHCP\nInstalaremos el servicio isc-dhcp-server.\n```sh title=\"Instalando isc-dhcp-server…\"\nsudo apt install isc-dhcp-server\n```\n:::caution\nAl instalar dara error porque deberemos configurar dos archivos para poder hacer que funcione.\n:::\n\n## Paso 3: Indicar la interfaz\nEl servicio DHCP sólo debe estar disponible para la red interna. Por eso, debe aceptar conexiones por la interfaz interna que querais utilizar. Esto puede indicarse en el archivo de configuración /etc/default/isc-dhcp-server:\n\n```bash title=\"/etc/default/isc-dhcp-server\"\nINTERFACESv4=\"enp2s0\"\n```\n## Paso 4: configurar subredes dhcp\n\n```bash title=\"/etc/dhcp/dhcpd.conf\"\n# opciones de nombre de dominio y servidor DNS asignado general\noption domain-name \"netwizhack.dev\";\noption domain-name-servers 192.168.1.254;\n\n#Rango de 30 maquinas en la subred interna\nsubnet 192.168.1.0 netmask 255.255.255.0 {\n  range 192.168.1.2 192.168.1.31;\n  option routers 192.168.1.1;\n  option broadcast-address 192.168.1.255;\n}\n\n#Zona de exclusion del DHCP\nhost desktop {\n  hardware ethernet 01:23:45:67:89:10;\n  fixed-address 192.168.1.45;\n}\n```\n## Paso 5: Reiniciar Servicio DHCP\nAhora podremos reiniciar el servicio y veremos que los errores desaparecen.\n\n```sh title=\"Reiniciando servicio isc-dhcp-server…\"\nsudo systemctl restart isc-dhcp-server\nsudo systemctl status isc-dhcp-server\n```\n";
						const data = {title:"DHCP Linux",description:"DHCP Linux",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/root/M7_doc/src/content/docs/m8/DHCP.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
