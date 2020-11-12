

import ApiClient from '../ApiClient';

/**
 * The PostTaxesGroupTaxComponents model module.
 * @module model/PostTaxesGroupTaxComponents
 * @version 1.0
 */
class PostTaxesGroupTaxComponents {
    /**
     * Constructs a new <code>PostTaxesGroupTaxComponents</code>.
     * @alias module:model/PostTaxesGroupTaxComponents
     */
    constructor() { 
        
        PostTaxesGroupTaxComponents.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTaxesGroupTaxComponents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTaxesGroupTaxComponents} obj Optional instance to populate.
     * @return {module:model/PostTaxesGroupTaxComponents} The populated <code>PostTaxesGroupTaxComponents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTaxesGroupTaxComponents();

            if (data.hasOwnProperty('taxComponentId')) {
                obj['taxComponentId'] = ApiClient.convertToType(data['taxComponentId'], 'Number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} taxComponentId
 */
PostTaxesGroupTaxComponents.prototype['taxComponentId'] = undefined;

/**
 * @member {String} startDate
 */
PostTaxesGroupTaxComponents.prototype['startDate'] = undefined;






export default PostTaxesGroupTaxComponents;

