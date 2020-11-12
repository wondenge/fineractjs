

import ApiClient from '../ApiClient';
import GetOfficesResponse from './GetOfficesResponse';

/**
 * The GetOfficesTemplateResponse model module.
 * @module model/GetOfficesTemplateResponse
 * @version 1.0
 */
class GetOfficesTemplateResponse {
    /**
     * Constructs a new <code>GetOfficesTemplateResponse</code>.
     * GetOfficesTemplateResponse
     * @alias module:model/GetOfficesTemplateResponse
     */
    constructor() { 
        
        GetOfficesTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetOfficesTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetOfficesTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetOfficesTemplateResponse} The populated <code>GetOfficesTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetOfficesTemplateResponse();

            if (data.hasOwnProperty('openingDate')) {
                obj['openingDate'] = ApiClient.convertToType(data['openingDate'], 'Date');
            }
            if (data.hasOwnProperty('allowedParents')) {
                obj['allowedParents'] = ApiClient.convertToType(data['allowedParents'], [GetOfficesResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Date} openingDate
 */
GetOfficesTemplateResponse.prototype['openingDate'] = undefined;

/**
 * @member {Array.<module:model/GetOfficesResponse>} allowedParents
 */
GetOfficesTemplateResponse.prototype['allowedParents'] = undefined;






export default GetOfficesTemplateResponse;

