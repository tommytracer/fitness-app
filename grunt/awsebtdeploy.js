module.exports = function (grunt, options) {
  return {
    dist: {
      options: {
        region: 'us-east-1',
        applicationName: '<%= awsProdAppName %>',
        environmentCNAME: '<%= awsProdEnvName %>.elasticbeanstalk.com',
        sourceBundle: '<%= zipname %><%= zipTimeStamp %>.zip',
        accessKeyId: '<%= awsProdKey %>',
        secretAccessKey: '<%= awsProdSecret %>',
        deployType: 'inPlace',
        versionDescription: '<%= zipDescription %>',
        s3: {
          bucket: 'fitness-webapp-deploy-zips'
      }
      }
    }
  };
};