const e="主机",o={label:"状态",available:"可用"},t={label:"Meilisearch 版本"},n="数据库大小",i="Meili 版本",l="连接失败, 去检查你的配置! 🤥",a={form:{primaryKey:{label:"主键",placeholder:"请求创建的索引的主键",tip:"[文档]它唯一地标识索引中的每个文档，确保不可能在同一索引中存在两个完全相同的文档。"},uid:{placeholder:"请求创建的索引的uid",tip:"[文档]定义后，就不能更改uid，也不能使用相同的uid创建另一个索引。",validation_error:"uid是索引的唯一标识符。它是在创建索引时设置的，必须是一个整数或仅包含字母数字字符、连字符-和下划线_的字符串。"}},label:"创建索引"},s={dialog:{tip:"你确定给实例 {{name}} 开启一次新的 dump ?",title:"创建一份 Dump"}},r=`Meilisearch 正在没有设置主密钥的情况下运行。
若要访问此API端点，您必须在启动时设置主密钥。`,c=`检测到单例模式连接失败！
正在没有有效实例配置的情况下运行，您必须在启动之前设置正确的实例环境配置`,d="未找到实例",_={title:{create:"新增实例",edit:"编辑实例"},name:{label:"名称",placeholder:"给你的实例一个名字，应该要不同于其它实例"},host:{label:"主机",tip:"请记得首先在实例所在的服务器上为管理面板地址设置跨域"},api_key:{label:"API 密钥",tip:"不用担心！你的数据只会储存在浏览器本地"}},u={host:e,status:o,version:t,db_size:n,meili_version:i,connection_failed:l,create_index:a,dump:s,no_master_key_error:r,singleton_cfg_not_found:c,not_found:d,form:_};export{l as connection_failed,a as create_index,n as db_size,u as default,s as dump,_ as form,e as host,i as meili_version,r as no_master_key_error,d as not_found,c as singleton_cfg_not_found,o as status,t as version};
