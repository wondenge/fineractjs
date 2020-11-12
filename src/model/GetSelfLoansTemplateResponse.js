

import ApiClient from '../ApiClient';
import GetSelfLoansProductOptions from './GetSelfLoansProductOptions';
import GetSelfLoansTimeline from './GetSelfLoansTimeline';

/**
 * The GetSelfLoansTemplateResponse model module.
 * @module model/GetSelfLoansTemplateResponse
 * @version 1.0
 */
class GetSelfLoansTemplateResponse {
    /**
     * Constructs a new <code>GetSelfLoansTemplateResponse</code>.
     * GetSelfLoansTemplateResponse
     * @alias module:model/GetSelfLoansTemplateResponse
     */
    constructor() { 
        
        GetSelfLoansTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfLoansTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfLoansTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfLoansTemplateResponse} The populated <code>GetSelfLoansTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfLoansTemplateResponse();

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
                obj['timeline'] = GetSelfLoansTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('productOptions')) {
                obj['productOptions'] = ApiClient.convertToType(data['productOptions'], [GetSelfLoansProductOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} clientId
 */
GetSelfLoansTemplateResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetSelfLoansTemplateResponse.prototype['clientName'] = undefined;

/**
 * @member {Number} clientOfficeId
 */
GetSelfLoansTemplateResponse.prototype['clientOfficeId'] = undefined;

/**
 * @member {module:model/GetSelfLoansTimeline} timeline
 */
GetSelfLoansTemplateResponse.prototype['timeline'] = undefined;

/**
 * @member {Array.<module:model/GetSelfLoansProductOptions>} productOptions
 */
GetSelfLoansTemplateResponse.prototype['productOptions'] = undefined;






export default GetSelfLoansTemplateResponse;

