package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.UserName;
import org.wecancodeit.serverside.repositories.UserNameRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class CommentController {

    @Resource
    private CommentRepo commentRepo;

    @GetMaping("/api/comment")
    public Collection<CommentCollection> get
}
