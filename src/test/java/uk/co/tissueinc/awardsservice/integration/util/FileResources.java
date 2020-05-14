package uk.co.tissueinc.awardsservice.integration.util;

import org.apache.commons.io.IOUtils;

import java.io.IOException;

public class FileResources {

    public static String load(String resourceName) {
        try {
            return IOUtils.toString(FileResources.class.getClassLoader().getResourceAsStream(resourceName));
        } catch (IOException e) {
            throw new RuntimeException(String.format("Failed to load resource with name %s", resourceName), e);
        }
    }
}
