package com.pengyl.api.controller;

import com.pengyl.api.util.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {

    @RequestMapping(value = "/list",method = RequestMethod.GET)
    public ModelMap getUserList(ModelMap modelMap){
        modelMap.setMessage("hahah");
        modelMap.setResult("hhh");
        modelMap.setStatus(1);
        return modelMap;
    }
}
