package com.pengyl.api.controller;

import com.pengyl.api.bean.User;
import com.pengyl.api.service.IUserService;
import com.pengyl.api.util.ModelMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("login")
@CrossOrigin
public class LoginController {
    @Autowired
    private IUserService userService;

    @RequestMapping(value = "/check", method = RequestMethod.POST)
    public ModelMap check(ModelMap modelMap, @RequestBody User user) {
        User user_1 = userService.findByLoginName(user.getLoginName());
        modelMap.setStatus(user_1 != null ? 1 : -1);
        modelMap.setResult(user_1);
        return modelMap;
    }
}
