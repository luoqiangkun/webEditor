<?php
	$_REQUEST['mdu'] = 'pay';
	require_once 'shop/configs/config.ini.php';
	// 接收参数
	$type = isset($_GET['type'])?$_GET['type']:"";
	$module_id = isset($_GET['module_id'])?$_GET['module_id']:"";
	$param = $_COOKIE['Mo_'.$module_id];

	// 商品-图文样式模板
	if($module_id > 1000 && $module_id < 2001){
		$param = json_decode($param,true);
		$css_arr = $param['css_arr'];
		$prduct = Product_BaseModel::getInstance()->get($param['id_arr']);
		foreach($prduct as $value){
			$content.="<li src=\"http://wanbang.xunyoutc.com/index.php/c/Product/f/detail&product_id=".$value['product_id']."\" class=\"wbGoodDetail\" style=\"cursor:pointer\">
				<div class=\"inner\" style=\"\" data-p=\"l:81,t:5\">
					<a class=\"pics\">
						<span class=\"pic int-showTitle-fade int-dom \" data-nimgurl=\"".$value['product_image']."?x-oss-process=image/resize,m_lfit,w_".$css_arr['p_c_pic_width'].",h_".$css_arr['p_c_pic_height'].",limit_0\" data-ntitle=\"康师傅绿茶500ml*1...\" data-nintro=\"\" style=\" width:".$css_arr['p_c_pic_width']."px; height:".$css_arr['p_c_pic_height']."px;\">
							<table>
								<tr>
									<td>
										<img  style=\"height:150px;with:150px\" alt=\"".$value['product_name']."\" src=\"\" class=\" lazy-loading\" data-original-src=\"".$value['product_image']."?x-oss-process=image/resize,m_lfit,w_".$css_arr['p_c_pic_width'].",h_".$css_arr['p_c_pic_height'].",limit_0\" />
									</td>
								</tr>
							</table>
							<div class=\"int-add-dom\">
								<div class=\"bgzz\" style=\"\">
								</div>
								<div class=\"figcaption\">
									<div class=\"show-attr\">
										<h3 style=\"height:34px;line-height:34px;color:rgb(255, 255, 255);font-size:14px;font-weight:400;font-style:normal;text-decoration:none;font-family:微软雅黑;text-align:center;\">
											".$value['product_name']."
										</h3>
									</div>
								</div>
							</div>
						</span>
					</a>
					<div class=\"pic-attr\" style=\"\">
						<div class=\"pic-price\">
							<span class=\"newPrice\">
								<em>
									￥".$value['product_market_price']."
								</em>
							</span>
							<span class=\"oldPrice\">
								<em>
									￥".$value['product_unit_price']."
								</em>
							</span>
						</div>
						<h3 class=\"pic-title\">
							<a class=\"\">
								".$value['product_name']."
							</a>
						</h3>
					</div>
				</div>
			</li>";
		}
		
		$direction = '0';
		if($css_arr['direction']==1){
			$direction = 'left';
		}else if($css_arr['direction']==2){
			$direction = 'right';
		}else if($css_arr['direction']==3){
			$direction = 'top';
		}else if($css_arr['direction']==4){
			$direction = 'bottom';
		}
		
		$speed = '0';
		if($css_arr['speed']==1){
			$speed = 'slowly';
		}else if($css_arr['speed']==2){
			$speed = 'slow';
		}else if($css_arr['speed']==3){
			$speed = 'normal';
		}else if($css_arr['speed']==4){
			$speed = 'quick';
		}else if($css_arr['speed']==5){
			$speed = 'quickly';
		}
		
		
		$type = '0';
		if($css_arr['move_type']==1){
			$type = 'single';
		}else if($css_arr['move_type']==2){
			$type = 'flow';
		}
		
		$arr = [
			"name" =>"<a  target=\"_blank\"  href=\"###\">".$param['name']."</a>",
			"mylink" =>"<a   target=\"_blank\"  href=\"###\">&#26356;&#22810;</a>",
			"con" =>"<div class=\"pic-text-list-module pic-text-list-module-3 \" data-move=\"".$css_arr['is_move']."\" data-axis=\"".$direction."\" data-speed=\"".$speed."\" data-type=\"".$type."\" id=\"prolist_54926\" data-interact=\"a:0,t:1\">
				<ul class=\"q \">
					".$content."
				</ul>
			</div>",
			"con_update" =>"1",
			"showType" =>"5",
			"jsData" =>[]
		];
		echo json_encode($arr);
	}else if($module_id > 2000 && $module_id < 3001){
		$param = json_decode($param,true);
		$css_arr = $param['css_arr'];
		$prduct = Article_BaseModel::getInstance()->get($param['id_arr']);
		// var_dump($prduct);die;
		foreach($prduct as $value){
			$html.="<li src=\"http://wanbang.xunyoutc.com/index.php/c/Product/f/detail&product_id=".$value['product_id']."\" class=\"wbGoodDetail\" style=\"cursor:pointer\">
				<div class=\"inner\">
					<a class=\"pics \">
						<span class=\"pic \" data-nimgurl=\"".$value['article_image']."?x-oss-process=image/resize,m_lfit,w_120,h_120,limit_0\" 
							  data-ntitle=\"".$value['article_title']."\"
							  data-nintro=\"".$value['article_content']."\" style=\ \"width:120px; height:120px;\">
							<table>
								<tr>
									<td>
										<img alt=\"".$value['article_title']."\" src=\"\" class=\" lazy-loading\" 
										data-original-src=\"".$value['article_image']."?x-oss-process=image/resize,m_lfit,w_120,h_120,limit_0\" />
									</td>
								</tr>
							</table>
						</span>
					</a>
					<div class=\"pic-attr\">
						<h3 class=\"pic-title\">
							<a class=\"\">
								".$value['article_title']."
							</a>
						</h3>
						<div class=\"pic-intro\">
							<p>
								".$value['article_content']."
							</p>
						</div>
					</div>
				</div>
			</li>";
		}

		$arr = [
		    "name" =>"<a  target=\"_blank\"  href=\"#\">".$param['name']."</a>",
		    "mylink" =>"<a   target=\"_blank\"  href=\"#\">&#26356;&#22810;</a>",
		    "con" =>"<div class=\"pic-text-list-module pic-text-list-module-1  \" data-move=\"0\" data-axis=\"0\" data-speed=\"0\" data-type=\"0\" id=\"prolist_59531\" data-interact=\"a:0,t:0\">				<ul class=\"q \">
					".$html."
			</ul></div>",
		    "con_update" =>"1",
		    "showType" =>"5",
		    "jsData" =>[]
		];
		echo json_encode($arr);
	}else if($module_id>3000&&$module_id<4001){
		// 求购信息
		$param = json_decode($param,true);
		$css_arr = $param['css_arr'];
		$prduct = Product_BaseModel::getInstance()->getProductInfo($param['id_arr']);
		// var_dump($prduct);
		// die;
		foreach($prduct as $value){
			$content.="
			<li src=\"http://wanbang.xunyoutc.com/index.php/c/Product/f/detail&product_id=".$value['product_id']."\"  class=\"wbGoodDetail\" style=\"cursor:pointer\">
				<div class=\"cont pic\" 
							data-nimgurl=\"".$value['product_image']."?x-oss-process=image/resize,m_lfit,w_".$css_arr['p_c_pic_width'].",h_".$css_arr['p_c_pic_height'].",limit_0\"
							 data-ntitle=\"".$value['product_name']."\">
					<img alt=\"".$value['product_name']."\"  class=\" lazy-loading\" data-original-src=\"".$value['product_image']."?x-oss-process=image/resize,m_lfit,w_".$css_arr['p_c_pic_width'].",h_".$css_arr['p_c_pic_height'].",limit_0\"  src=\"".$value['product_image']."?x-oss-process=image/resize,m_lfit,w_".$css_arr['p_c_pic_width'].",h_".$css_arr['p_c_pic_height'].",limit_0\"/>
					
					<div class=\"name\">".$value['product_name']."</div>
					<div class=\"item\"><span class=\"blue\">产品规格</span>:".$value['product_normal_spec']."</div>
					<div class=\"item\"><span class=\"blue\">采购数量</span>:".$value['product_quantity']."</div>
					<div class=\"item\"><span class=\"red\">预估价格</span>: ".$value['product_unit_price']." </div>
					<div class=\"item\"><span>生产厂家</span>:".$value['store_name']."</div>
					<div class=\"item\"><span>采购类型</span>: 协议采购（长期采购）</div>
					<div class=\"item\"><span>其它</span>: <div class=\"tag\">包邮</div>
						<div class=\"tag blue\">".$value['city']."</div>
					</div>
					<div class=\"item\"><span>截止日期</span>: ".$value['product_latest_date']."</div>
					<div class=\"buttonLine\">
						<div>立即报价</div>
						<div>联系我们</div>
					</div>
				</div>
			</li>
			";
		}
		
		$direction = '0';
		if($css_arr['direction']==1){
			$direction = 'left';
		}else if($css_arr['direction']==2){
			$direction = 'right';
		}else if($css_arr['direction']==3){
			$direction = 'top';
		}else if($css_arr['direction']==4){
			$direction = 'bottom';
		}
		
		$speed = '0';
		if($css_arr['speed']==1){
			$speed = 'slowly';
		}else if($css_arr['speed']==2){
			$speed = 'slow';
		}else if($css_arr['speed']==3){
			$speed = 'normal';
		}else if($css_arr['speed']==4){
			$speed = 'quick';
		}else if($css_arr['speed']==5){
			$speed = 'quickly';
		}
		
		
		$type = '0';
		if($css_arr['move_type']==1){
			$type = 'single';
		}else if($css_arr['move_type']==2){
			$type = 'flow';
		}
		
		$arr = [
			"name" =>"<a  target=\"_blank\"  href=\"###\">".$param['name']."</a>",
			"mylink" =>"<a   target=\"_blank\"  href=\"###\">&#26356;&#22810;</a>",
			"con" =>"<div class=\"pic-text-list-module qiugou_main \" data-move=\"".$css_arr['is_move']."\" data-axis=\"".$direction."\" data-speed=\"".$speed."\" data-type=\"".$type."\" id=\"prolist_54926\" data-interact=\"a:0,t:1\">
				<ul style=\"display:flex\">
					".$content."
				</ul>
			</div>",
			"con_update" =>"1",
			"showType" =>"5",
			"jsData" =>[]
		];
		echo json_encode($arr);
	}else if($module_id>4000&&$module_id<5001){
		// 供货信息
		$param = json_decode($param,true);
		$css_arr = $param['css_arr'];
		$prduct = Product_BaseModel::getInstance()->getProductInfo($param['id_arr']);
		// var_dump($prduct);
		// die;
		foreach($prduct as $value){
			$content.="
				<li src=\"http://wanbang.xunyoutc.com/index.php/c/Product/f/detail&product_id=".$value['product_id']."\" class=\"wbGoodDetail\" style=\"cursor:pointer\">
				<div class=\"cont pic\" 
							data-nimgurl=\"".$value['product_image']."?x-oss-process=image/resize,m_lfit,w_".$css_arr['p_c_pic_width'].",h_".$css_arr['p_c_pic_height'].",limit_0\"
							 data-ntitle=\"".$value['product_name']."\">
						<img alt=\"".$value['product_name']."\"  class=\" lazy-loading\" data-original-src=\"".$value['product_image']."?x-oss-process=image/resize,m_lfit,w_".$css_arr['p_c_pic_width'].",h_".$css_arr['p_c_pic_height'].",limit_0\"  src=\"".$value['product_image']."?x-oss-process=image/resize,m_lfit,w_".$css_arr['p_c_pic_width'].",h_".$css_arr['p_c_pic_height'].",limit_0\"/>
						<div class=\"name\">".$value['product_name']."</div>
						<div class=\"item\"><span>产品规格</span>: ".$value['product_normal_spec']."</div>
						<div class=\"item\"><span>生产产家</span>: ".$value['store_name']."</div>
						<div class=\"price\"><div><span>¥</span>".$value['product_unit_price']."</div><div>¥".$value['product_market_price']."</div></div>
						<div class=\"sale\">已售".$value['product_sale_num']."<div><span style=\"width: 22%;\"></span></div></div>
					</div>
				</li>
			";
		}
		
		$direction = '0';
		if($css_arr['direction']==1){
			$direction = 'left';
		}else if($css_arr['direction']==2){
			$direction = 'right';
		}else if($css_arr['direction']==3){
			$direction = 'top';
		}else if($css_arr['direction']==4){
			$direction = 'bottom';
		}
		
		$speed = '0';
		if($css_arr['speed']==1){
			$speed = 'slowly';
		}else if($css_arr['speed']==2){
			$speed = 'slow';
		}else if($css_arr['speed']==3){
			$speed = 'normal';
		}else if($css_arr['speed']==4){
			$speed = 'quick';
		}else if($css_arr['speed']==5){
			$speed = 'quickly';
		}
		
		
		$type = '0';
		if($css_arr['move_type']==1){
			$type = 'single';
		}else if($css_arr['move_type']==2){
			$type = 'flow';
		}
		
		$arr = [
			"name" =>"<a  target=\"_blank\"  href=\"###\">".$param['name']."</a>",
			"mylink" =>"<a   target=\"_blank\"  href=\"###\">&#26356;&#22810;</a>",
			"con" =>"<div class=\"pic-text-list-module qiugou_main \" data-move=\"".$css_arr['is_move']."\" data-axis=\"".$direction."\" data-speed=\"".$speed."\" data-type=\"".$type."\" id=\"prolist_54926\" data-interact=\"a:0,t:1\">
				<ul style=\"display:flex\">
					".$content."
				</ul>
			</div>",
			"con_update" =>"1",
			"showType" =>"5",
			"jsData" =>[]
		];
		echo json_encode($arr);
	}else if($module_id>5000&&$module_id<6001){
		// 药品情报站
		$param = json_decode($param,true);
		$css_arr = $param['css_arr'];
		$prduct = Product_BaseModel::getInstance()->getProductInfo($param['id_arr']);
		// var_dump($prduct);
		// die;
		foreach($prduct as $value){
			$content.="
				<li style=\"width:100%\" class=\"wbGoodDetail\" style=\"cursor:pointer\">
					<div class=\"main_item pic\" 
					data-ntitle=\"".$value['product_name']."\"
					data-nimgurl=\"".$value['product_image']."?x-oss-process=image/resize,m_lfit,w_".$css_arr['p_c_pic_width'].",h_".$css_arr['p_c_pic_height'].",limit_0\">
						<div>".$value['city']."</div>
						<div>".$value['product_name']."</div>
						<div>".$value['product_normal_spec']."</div>
						<div>".substr($value['product_add_time'],0,10)."</div>
						<div>".$value['product_unit_price']."</div>
						<div class=\"red\">+0.30</div>
					</div>
				</li>
			";
		}
		
		$direction = '0';
		if($css_arr['direction']==1){
			$direction = 'left';
		}else if($css_arr['direction']==2){
			$direction = 'right';
		}else if($css_arr['direction']==3){
			$direction = 'top';
		}else if($css_arr['direction']==4){
			$direction = 'bottom';
		}
		
		$speed = '0';
		if($css_arr['speed']==1){
			$speed = 'slowly';
		}else if($css_arr['speed']==2){
			$speed = 'slow';
		}else if($css_arr['speed']==3){
			$speed = 'normal';
		}else if($css_arr['speed']==4){
			$speed = 'quick';
		}else if($css_arr['speed']==5){
			$speed = 'quickly';
		}
		
		
		$type = '0';
		if($css_arr['move_type']==1){
			$type = 'single';
		}else if($css_arr['move_type']==2){
			$type = 'flow';
		}
		
		$arr = [
			"name" =>"<a  target=\"_blank\"  href=\"###\">".$param['name']."</a>",
			"mylink" =>"<a   target=\"_blank\"  href=\"###\">&#26356;&#22810;</a>",
			"con" =>"<div class=\"pic-text-list-module yaopin_main \" data-move=\"".$css_arr['is_move']."\" data-axis=\"".$direction."\" data-speed=\"".$speed."\" data-type=\"".$type."\" id=\"prolist_54926\" data-interact=\"a:0,t:1\">
				<ul>
					".$content."
				</ul>
			</div>",
			"con_update" =>"1",
			"showType" =>"5",
			"jsData" =>[]
		];
		echo json_encode($arr);
	}
?>