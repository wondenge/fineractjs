

import ApiClient from '../ApiClient';
import AppUserData from './AppUserData';
import ProcessingResultLookup from './ProcessingResultLookup';

/**
 * The GetMakerCheckersSearchTemplateResponse model module.
 * @module model/GetMakerCheckersSearchTemplateResponse
 * @version 1.0
 */
class GetMakerCheckersSearchTemplateResponse {
    /**
     * Constructs a new <code>GetMakerCheckersSearchTemplateResponse</code>.
     * GetMakerCheckersSearchTemplateResponse
     * @alias module:model/GetMakerCheckersSearchTemplateResponse
     */
    constructor() { 
        
        GetMakerCheckersSearchTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetMakerCheckersSearchTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetMakerCheckersSearchTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetMakerCheckersSearchTemplateResponse} The populated <code>GetMakerCheckersSearchTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetMakerCheckersSearchTemplateResponse();

            if (data.hasOwnProperty('appUsers')) {
                obj['appUsers'] = ApiClient.convertToType(data['appUsers'], [AppUserData]);
            }
            if (data.hasOwnProperty('actionNames')) {
                obj['actionNames'] = ApiClient.convertToType(data['actionNames'], ['String']);
            }
            if (data.hasOwnProperty('entityNames')) {
                obj['entityNames'] = ApiClient.convertToType(data['entityNames'], ['String']);
            }
            if (data.hasOwnProperty('processingResults')) {
                obj['processingResults'] = ApiClient.convertToType(data['processingResults'], [ProcessingResultLookup]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AppUserData>} appUsers
 */
GetMakerCheckersSearchTemplateResponse.prototype['appUsers'] = undefined;

/**
 * @member {Array.<String>} actionNames
 */
GetMakerCheckersSearchTemplateResponse.prototype['actionNames'] = undefined;

/**
 * @member {Array.<String>} entityNames
 */
GetMakerCheckersSearchTemplateResponse.prototype['entityNames'] = undefined;

/**
 * @member {Array.<module:model/ProcessingResultLookup>} processingResults
 */
GetMakerCheckersSearchTemplateResponse.prototype['processingResults'] = undefined;






export default GetMakerCheckersSearchTemplateResponse;

