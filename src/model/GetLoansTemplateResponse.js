

import ApiClient from '../ApiClient';
import GetLoansTemplateProductOptions from './GetLoansTemplateProductOptions';
import GetLoansTemplateTimeline from './GetLoansTemplateTimeline';

/**
 * The GetLoansTemplateResponse model module.
 * @module model/GetLoansTemplateResponse
 * @version 1.0
 */
class GetLoansTemplateResponse {
    /**
     * Constructs a new <code>GetLoansTemplateResponse</code>.
     * GetLoansTemplateResponse
     * @alias module:model/GetLoansTemplateResponse
     */
    constructor() { 
        
        GetLoansTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetLoansTemplateResponse} The populated <code>GetLoansTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansTemplateResponse();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('clientOfficeId')) {
                obj['clientOfficeId'] = ApiClient.convertToType(data['clientOfficeId'], 'Number');
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetLoansTemplateTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('productOptions')) {
                obj['productOptions'] = ApiClient.convertToType(data['productOptions'], [GetLoansTemplateProductOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} clientId
 */
GetLoansTemplateResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetLoansTemplateResponse.prototype['clientName'] = undefined;

/**
 * @member {Number} clientOfficeId
 */
GetLoansTemplateResponse.prototype['clientOfficeId'] = undefined;

/**
 * @member {module:model/GetLoansTemplateTimeline} timeline
 */
GetLoansTemplateResponse.prototype['timeline'] = undefined;

/**
 * @member {Array.<module:model/GetLoansTemplateProductOptions>} productOptions
 */
GetLoansTemplateResponse.prototype['productOptions'] = undefined;






export default GetLoansTemplateResponse;

