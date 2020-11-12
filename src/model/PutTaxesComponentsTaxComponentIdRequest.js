

import ApiClient from '../ApiClient';

/**
 * The PutTaxesComponentsTaxComponentIdRequest model module.
 * @module model/PutTaxesComponentsTaxComponentIdRequest
 * @version 1.0
 */
class PutTaxesComponentsTaxComponentIdRequest {
    /**
     * Constructs a new <code>PutTaxesComponentsTaxComponentIdRequest</code>.
     * PutTaxesComponentsTaxComponentIdRequest
     * @alias module:model/PutTaxesComponentsTaxComponentIdRequest
     */
    constructor() { 
        
        PutTaxesComponentsTaxComponentIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTaxesComponentsTaxComponentIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTaxesComponentsTaxComponentIdRequest} obj Optional instance to populate.
     * @return {module:model/PutTaxesComponentsTaxComponentIdRequest} The populated <code>PutTaxesComponentsTaxComponentIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTaxesComponentsTaxComponentIdRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
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
PutTaxesComponentsTaxComponentIdRequest.prototype['name'] = undefined;

/**
 * @member {Number} percentage
 */
PutTaxesComponentsTaxComponentIdRequest.prototype['percentage'] = undefined;

/**
 * @member {String} locale
 */
PutTaxesComponentsTaxComponentIdRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PutTaxesComponentsTaxComponentIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} startDate
 */
PutTaxesComponentsTaxComponentIdRequest.prototype['startDate'] = undefined;






export default PutTaxesComponentsTaxComponentIdRequest;

