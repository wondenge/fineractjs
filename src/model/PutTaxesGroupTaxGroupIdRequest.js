

import ApiClient from '../ApiClient';
import PutTaxesGroupTaxComponents from './PutTaxesGroupTaxComponents';

/**
 * The PutTaxesGroupTaxGroupIdRequest model module.
 * @module model/PutTaxesGroupTaxGroupIdRequest
 * @version 1.0
 */
class PutTaxesGroupTaxGroupIdRequest {
    /**
     * Constructs a new <code>PutTaxesGroupTaxGroupIdRequest</code>.
     * PutTaxesGroupTaxGroupIdRequest
     * @alias module:model/PutTaxesGroupTaxGroupIdRequest
     */
    constructor() { 
        
        PutTaxesGroupTaxGroupIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTaxesGroupTaxGroupIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTaxesGroupTaxGroupIdRequest} obj Optional instance to populate.
     * @return {module:model/PutTaxesGroupTaxGroupIdRequest} The populated <code>PutTaxesGroupTaxGroupIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTaxesGroupTaxGroupIdRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('taxComponents')) {
                obj['taxComponents'] = ApiClient.convertToType(data['taxComponents'], [PutTaxesGroupTaxComponents]);
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutTaxesGroupTaxGroupIdRequest.prototype['name'] = undefined;

/**
 * @member {String} locale
 */
PutTaxesGroupTaxGroupIdRequest.prototype['locale'] = undefined;

/**
 * @member {Array.<module:model/PutTaxesGroupTaxComponents>} taxComponents
 */
PutTaxesGroupTaxGroupIdRequest.prototype['taxComponents'] = undefined;

/**
 * @member {String} dateFormat
 */
PutTaxesGroupTaxGroupIdRequest.prototype['dateFormat'] = undefined;






export default PutTaxesGroupTaxGroupIdRequest;

