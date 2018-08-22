using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;

namespace CognitiveServices.Controllers
{
    [Route("computer-vision"), ApiController]
    public class ComputerVisionController : ControllerBase
    {
        private ComputerVisionClient _computerVisionService;

        public ComputerVisionController()
        {
            _computerVisionService = new ComputerVisionClient(new ApiKeyServiceClientCredentials("<YOUR KEY>"),
                new System.Net.Http.DelegatingHandler[] { });
            _computerVisionService.Endpoint = "https://brazilsouth.api.cognitive.microsoft.com/";
        }

        [HttpPost, Route("getInfoFromUrl")]
        public async Task<IActionResult> GetInfoFromUrl([FromBody]ImageUrlModel data)
        {
            if (!Uri.IsWellFormedUriString(data.Url, UriKind.Absolute))
            {
                return BadRequest(new
                {
                    success = false,
                    error = $"Invalid remoteImageUrl: {data.Url}"
                });
            }

            var features = new VisualFeatureTypes[] { VisualFeatureTypes.Tags, VisualFeatureTypes.Description };
            var response = await _computerVisionService.AnalyzeImageAsync(data.Url, features);
            return Ok(response);
        }

        [HttpPost, Route("getInfo")]
        public async Task<IActionResult> GetInfo([FromBody]ImageUploadModel data)
        {
            var features = new VisualFeatureTypes[] { VisualFeatureTypes.Tags, VisualFeatureTypes.Description };
            using (Stream imageStream = new MemoryStream(Convert.FromBase64String(data.value)))
            {
                ImageAnalysis analysis = await _computerVisionService.AnalyzeImageInStreamAsync(imageStream, features);

                return Ok(analysis);
            }
        }
    }
}
