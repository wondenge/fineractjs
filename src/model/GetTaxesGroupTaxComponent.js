

import ApiClient from '../ApiClient';

/**
 * The GetTaxesGroupTaxComponent model module.
 * @module model/GetTaxesGroupTaxComponent
 * @version 1.0
 */
class GetTaxesGroupTaxComponent {
    /**
     * Constructs a new <code>GetTaxesGroupTaxComponent</code>.
     * @alias module:model/GetTaxesGroupTaxComponent
     */
    constructor() { 
        
        GetTaxesGroupTaxComponent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTaxesGroupTaxComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTaxesGroupTaxComponent} obj Optional instance to populate.
     * @return {module:model/GetTaxesGroupTaxComponent} The populated <code>GetTaxesGroupTaxComponent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTaxesGroupTaxComponent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetTaxesGroupTaxComponent.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetTaxesGroupTaxComponent.prototype['name'] = undefined;






export default GetTaxesGroupTaxComponent;

