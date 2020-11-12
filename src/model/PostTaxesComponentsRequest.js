

import ApiClient from '../ApiClient';

/**
 * The PostTaxesComponentsRequest model module.
 * @module model/PostTaxesComponentsRequest
 * @version 1.0
 */
class PostTaxesComponentsRequest {
    /**
     * Constructs a new <code>PostTaxesComponentsRequest</code>.
     * PostTaxesComponentsRequest
     * @alias module:model/PostTaxesComponentsRequest
     */
    constructor() { 
        
        PostTaxesComponentsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTaxesComponentsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTaxesComponentsRequest} obj Optional instance to populate.
     * @return {module:model/PostTaxesComponentsRequest} The populated <code>PostTaxesComponentsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTaxesComponentsRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('creditAccountType')) {
                obj['creditAccountType'] = ApiClient.convertToType(data['creditAccountType'], 'Number');
            }
            if (data.hasOwnProperty('creditAcountId')) {
                obj['creditAcountId'] = ApiClient.convertToType(data['creditAcountId'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostTaxesComponentsRequest.prototype['name'] = undefined;

/**
 * @member {Number} percentage
 */
PostTaxesComponentsRequest.prototype['percentage'] = undefined;

/**
 * @member {Number} creditAccountType
 */
PostTaxesComponentsRequest.prototype['creditAccountType'] = undefined;

/**
 * @member {Number} creditAcountId
 */
PostTaxesComponentsRequest.prototype['creditAcountId'] = undefined;

/**
 * @member {String} locale
 */
PostTaxesComponentsRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostTaxesComponentsRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} startDate
 */
PostTaxesComponentsRequest.prototype['startDate'] = undefined;






export default PostTaxesComponentsRequest;

