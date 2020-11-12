

import ApiClient from '../ApiClient';

/**
 * The PutTaxesGroupTaxComponents model module.
 * @module model/PutTaxesGroupTaxComponents
 * @version 1.0
 */
class PutTaxesGroupTaxComponents {
    /**
     * Constructs a new <code>PutTaxesGroupTaxComponents</code>.
     * @alias module:model/PutTaxesGroupTaxComponents
     */
    constructor() { 
        
        PutTaxesGroupTaxComponents.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTaxesGroupTaxComponents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTaxesGroupTaxComponents} obj Optional instance to populate.
     * @return {module:model/PutTaxesGroupTaxComponents} The populated <code>PutTaxesGroupTaxComponents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTaxesGroupTaxComponents();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('taxComponentId')) {
                obj['taxComponentId'] = ApiClient.convertToType(data['taxComponentId'], 'Number');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
PutTaxesGroupTaxComponents.prototype['id'] = undefined;

/**
 * @member {Number} taxComponentId
 */
PutTaxesGroupTaxComponents.prototype['taxComponentId'] = undefined;

/**
 * @member {String} endDate
 */
PutTaxesGroupTaxComponents.prototype['endDate'] = undefined;






export default PutTaxesGroupTaxComponents;

